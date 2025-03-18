
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

interface ProfileFormData {
  fullName: string;
  birthDate: string;
  passportData: string;
  ipn: string;
  phone: string;
  email: string;
  address: string;
  edrpo: string;
}

const ProfileForm = () => {
  const form = useForm<ProfileFormData>({
    defaultValues: {
      fullName: "",
      birthDate: "",
      passportData: "",
      ipn: "",
      phone: "",
      email: "",
      address: "",
      edrpo: "",
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-2xl p-6 bg-white rounded-lg shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ПІБ *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Введіть ПІБ" required />
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
                  <Input {...field} type="date" />
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
                  <Input {...field} placeholder="Серія та номер паспорта" required />
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
                  <Input {...field} placeholder="Введіть ІПН" required />
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
                  <Input {...field} type="tel" placeholder="+380" required />
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
                  <Input {...field} type="email" placeholder="example@mail.com" />
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
                  <Input {...field} placeholder="Введіть адресу" required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="edrpo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ЄДРПО *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Введіть ЄДРПО" required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            Зберегти зміни
          </Button>
        </form>
      </Form>
    </div>
  );
};

export { ProfileForm };
