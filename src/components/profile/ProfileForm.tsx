
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Save } from "lucide-react";

interface ProfileFormData {
  lastName: string;
  firstName: string;
  middleName: string;
  rnokpp: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  isRegisteredAsFop: "yes" | "no";
  registrationAddress: string;
  passport: string;
  passportIssueDate: string;
  
  // Additional fields
  skype: string;
  viber: string;
  whatsapp: string;
  hasDigitalSignature: "yes" | "no";
  digitalSignatureIssuer: string;
  digitalSignatureIssueDate: string;
  digitalSignatureExpiryDate: string;
  comments: string;
}

const ProfileForm = () => {
  const form = useForm<ProfileFormData>({
    defaultValues: {
      lastName: "",
      firstName: "",
      middleName: "",
      rnokpp: "",
      birthDay: "",
      birthMonth: "",
      birthYear: "",
      isRegisteredAsFop: "no",
      registrationAddress: "",
      passport: "",
      passportIssueDate: "",
      
      // Additional fields
      skype: "",
      viber: "",
      whatsapp: "",
      hasDigitalSignature: "no",
      digitalSignatureIssuer: "",
      digitalSignatureIssueDate: "",
      digitalSignatureExpiryDate: "",
      comments: "",
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="mb-6">
            <h2 className="text-xl font-medium mb-4">Основна інформація</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Прізвище *</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Введіть прізвище" required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ім'я *</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Введіть ім'я" required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="middleName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>По батькові *</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Введіть по батькові" required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rnokpp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>РНОКПП</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Введіть РНОКПП" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="col-span-1 md:col-span-2">
                <FormLabel className="block mb-2">Дата народження *</FormLabel>
                <div className="grid grid-cols-3 gap-2">
                  <FormField
                    control={form.control}
                    name="birthDay"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} placeholder="Число" required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="birthMonth"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} placeholder="Місяць" required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="birthYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} placeholder="Рік" required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="isRegisteredAsFop"
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-2">
                    <FormLabel>Чи зареєстровані ви як ФОП? *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="fop-yes" />
                          <label htmlFor="fop-yes">Так</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="fop-no" />
                          <label htmlFor="fop-no">Ні</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="registrationAddress"
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-3">
                    <FormLabel>Адреса реєстрації</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Введіть адресу реєстрації" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="passport"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Паспорт</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Серія та номер паспорта" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="passportIssueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Коли виданий *</FormLabel>
                    <FormControl>
                      <Input {...field} type="date" required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-4">Додаткові поля</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="skype"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skype</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Введіть Skype логін" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="viber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Viber-номер телефону</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Введіть Viber номер" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp-номер телефону</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Введіть WhatsApp номер" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hasDigitalSignature"
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-3">
                    <FormLabel>Наявність ЕЦП</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="ecp-yes" />
                          <label htmlFor="ecp-yes">Так</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="ecp-no" />
                          <label htmlFor="ecp-no">Ні</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.watch("hasDigitalSignature") === "yes" && (
                <>
                  <FormField
                    control={form.control}
                    name="digitalSignatureIssuer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ким виданий ЕЦП</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Введіть установу" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="digitalSignatureIssueDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Коли виданий ЕЦП</FormLabel>
                        <FormControl>
                          <Input {...field} type="date" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="digitalSignatureExpiryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Строк дії ЕЦП</FormLabel>
                        <FormControl>
                          <Input {...field} type="date" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name="comments"
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-3">
                    <FormLabel>Коментар</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        placeholder="Введіть додаткові коментарі" 
                        className="min-h-[120px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button type="submit" size="lg">
              <Save className="mr-2 h-4 w-4" />
              Зберегти зміни
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export { ProfileForm };
