
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const registerSchema = z.object({
  fullName: z.string().min(3, 'ПІБ має містити щонайменше 3 символи'),
  birthDate: z.string().optional(),
  passportData: z.string().min(8, 'Введіть коректні паспортні дані'),
  ipn: z.string().min(10, 'ІПН має містити щонайменше 10 символів'),
  phone: z.string().min(10, 'Телефон має містити щонайменше 10 символів'),
  email: z.string().email('Введіть коректний email'),
  address: z.string().min(5, 'Адреса має містити щонайменше 5 символів'),
  edrpou: z.string().min(8, 'ЄДРПОУ має містити щонайменше 8 символів'),
  password: z.string().min(6, 'Пароль має містити щонайменше 6 символів'),
  confirmPassword: z.string().min(6, 'Підтвердження пароля має містити щонайменше 6 символів'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Паролі не співпадають',
  path: ['confirmPassword'],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: 'Іваненко Петро Васильович',
      birthDate: '1985-05-15',
      passportData: 'КК123456',
      ipn: '1234567890',
      phone: '+380991234567',
      email: 'petro@example.com',
      address: 'м. Київ, вул. Хрещатик, 1',
      edrpou: '12345678',
      password: 'password123',
      confirmPassword: 'password123',
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true);
    try {
      // Register the user with Supabase Auth
      const { error: signUpError, data: signUpData } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.fullName,
          },
        },
      });

      if (signUpError) {
        toast({
          title: 'Помилка реєстрації',
          description: signUpError.message,
          variant: 'destructive',
        });
        return;
      }

      // Update the user profile with additional data
      if (signUpData?.user) {
        const { error: updateError } = await supabase
          .from('profiles')
          .update({
            full_name: data.fullName,
            birth_date: data.birthDate || null,
            passport_data: data.passportData,
            ipn: data.ipn,
            phone: data.phone,
            address: data.address,
            edrpou: data.edrpou,
          })
          .eq('id', signUpData.user.id);

        if (updateError) {
          console.error('Error updating profile:', updateError);
        }
      }

      toast({
        title: 'Успішна реєстрація',
        description: 'Ви успішно зареєструвалися в системі',
      });
      navigate('/');
    } catch (error) {
      toast({
        title: 'Помилка реєстрації',
        description: 'Виникла помилка при реєстрації',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ПІБ *</FormLabel>
                <FormControl>
                  <Input placeholder="Введіть ПІБ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Дата народження</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
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
                  <Input placeholder="Введіть паспортні дані" {...field} />
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
                  <Input placeholder="+380..." {...field} />
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
                  <Input placeholder="Введіть email" {...field} />
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
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Введіть пароль"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Підтвердження пароля *</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Підтвердіть пароль"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          <UserPlus className="mr-2 h-4 w-4" />
          {isLoading ? 'Реєстрація...' : 'Зареєструватися'}
        </Button>
      </form>
    </Form>
  );
};
