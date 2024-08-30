"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Checkbox } from "../../ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { redirect } from "next/navigation";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  client: z.string().optional(),
});

export default function LoginForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      client: "PRIMUS",
    },
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    try {
      let res = await axios.post(
        "http://165.22.70.167:9100/apicore/v1/users/auth",
        values
      );
      if (res.status == 200) {
        return res.data;
      } else {
        console.log(res.data);
        throw new Error(res.data.message);
      }
    } catch (error: any) {
      throw new Error(error.message ?? error.toString());
    }
  }

  const handleSubmit = async (values: z.infer<typeof schema>) => {
    setIsLoading(true);
    toast.promise(onSubmit(values), {
      loading: "Logging in...",
      success: () => {
        setIsLoading(false);
        form.reset();
        redirect("/home");
        return "Login successful";
      },
      error: (err) => {
        setIsLoading(false);
        console.error(err);
        return err.message ?? err.toString();
      },
      action: {
        label: "Close",
        onClick: () => {},
      },
    });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between pb-[16px]">
            <div>
              <Checkbox />
              <span className="ml-2 text-muted-foreground">Remember me</span>
            </div>
            <a
              href="#"
              className="ml-auto text-muted-foreground hover:underline">
              Forgot your password?
            </a>
          </div>
          <div className="space-x-5">
            <Button
              disabled={isLoading}
              type="submit"
              className="h-[54px] shadow-xl">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "Logging in..." : "Login"}
            </Button>
            <Button
              variant={"outline"}
              type="button"
              className="text-primary h-[54px]">
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
