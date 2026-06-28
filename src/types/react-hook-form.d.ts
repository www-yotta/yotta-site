declare module "react-hook-form" {
  export interface UseFormReturn<TFieldValues extends Record<string, any> = Record<string, any>, TContext = any> {
    register: (name: string, options?: any) => any;
    handleSubmit: (callback: (data: TFieldValues) => void) => (e?: any) => void;
    reset: (values?: Partial<TFieldValues>) => void;
    formState: {
      errors: Record<string, any>;
    };
  }

  export function useForm<TFieldValues extends Record<string, any> = Record<string, any>, TContext = any>(
    options?: any,
  ): UseFormReturn<TFieldValues, TContext>;
}
