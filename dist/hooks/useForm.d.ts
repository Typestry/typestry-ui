import { BaseSyntheticEvent } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface UseFormArgs<Values> {
    onSubmit: (values: Values) => Promise<void>;
}
export interface UseFormReturn<Values extends FieldValues> {
    isSubmitting: boolean;
    handleSubmit: (e: BaseSyntheticEvent) => void;
    isError: boolean;
    register: UseFormRegister<Values>;
}
declare const useForm: <Values extends FieldValues>({ onSubmit, }: UseFormArgs<Values>) => UseFormReturn<Values>;
export default useForm;
