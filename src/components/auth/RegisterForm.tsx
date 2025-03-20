
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { CalendarIcon, Eye, EyeOff, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabase';

const formSchema = z.object({
  fullName: z.string().min(3, 'ПІБ має містити щонайменше 3 символи'),
  birthDate: z.date().optional(),
  passportData: z.string().min(6, 'Введіть коректні паспортні дані'),
  ipn: z.string().min(10, 'ІПН має містити щонайменше 10 символів'),
  phone: z.string().min(10, 'Введіть коректний номер телефону'),
  email: z.string().email('Введіть коректний email'),
  address: z.string().min(5, 'Адреса має містити щонайменше 5 символів'),
  edrpou: z.string().min(8, 'ЄДРПОУ має містити щонайменше 8 символів'),
  password: z.string().min(6, 'Пароль повинен містити щонайменше 6 символів'),
  confirmPassword: z.string().min(6, 'Пароль повинен містити щонайменше 6 символів'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Паролі не співпадають",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

export const RegisterForm = () => {
  const { signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Попередньо заповнені дані для демонстрації
      fullName: 'Іван Петрович Сидоренко',
      birthDate: new Date('1985-05-15'),
      passportData: 'AB123456',
      ipn: '1234567890',
      phone: '+380501234567',
      email: 'demo@example.com',
      address: 'м. Київ, вул. Хрещатик, 1',
      edrpou: '12345678',
      password: 'password123',
      confirmPassword: 'password123',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      // Реєстрація користувача за допомогою Supabase
      const { error: signUpError, data: authData } = await signUp(data.email, data.password);
      
      if (signUpError) {
        toast({
          variant: 'destructive',
          title: 'Помилка реєстрації',
          description: signUpError.message,
        });
        return;
      }

      // Збереження додаткових даних користувача в таблицю профілів
      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            user_id: authData.user.id,
            full_name: data.fullName,
            birth_date: data.birthDate ? data.birthDate.toISOString() : null,
            passport_data: data.passportData,
            ipn: data.ipn,
            phone: data.phone,
            email: data.email,
            address: data.address,
            edrpou: data.edrpou,
          });

        if (profileError) {
          toast({
            variant: 'destructive',
            title: 'Помилка збереження профілю',
            description: profileError.message,
          });
          return;
        }
      }

      toast({
        title: 'Реєстрація успішна',
        description: 'Ви успішно зареєстровані в системі',
      });
      
      navigate('/login');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Помилка',
        description: 'Щось пішло не так. Спробуйте ще раз.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ПІБ *</FormLabel>
              <FormControl>
                <Input placeholder="Петров Іван Сергійович" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Дата народження</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", { locale: uk })
                      ) : (
                        <span>Оберіть дату</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passportData"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Паспортні дані *</FormLabel>
              <FormControl>
                <Input placeholder="Серія та номер паспорта" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ipn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ІПН *</FormLabel>
              <FormControl>
                <Input placeholder="Введіть ІПН" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Телефон *</FormLabel>
              <FormControl>
                <Input placeholder="+380" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Адреса *</FormLabel>
              <FormControl>
                <Input placeholder="Введіть адресу" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="edrpou"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ЄДРПОУ *</FormLabel>
              <FormControl>
                <Input placeholder="Введіть ЄДРПОУ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль *</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    {...field}
                  />
                </FormControl>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Підтвердження паролю *</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    {...field}
                  />
                </FormControl>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                  onClick={toggleShowConfirmPassword}
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between items-center pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/login')}
          >
            Вже є обліковий запис
          </Button>
          <Button type="submit" disabled={isLoading}>
            <UserPlus className="mr-2 h-4 w-4" />
            {isLoading ? 'Реєстрація...' : 'Зареєструватися'}
          </Button>
        </div>
      </form>
    </Form>
  );
};
