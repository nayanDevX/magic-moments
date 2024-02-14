import { useState } from 'react'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import { Field, Form, Formik } from 'formik'
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi'
import * as Yup from 'yup'
import type { MouseEvent } from 'react'
import { setCreateEventDialogue } from '@/store/slices/data/dialogueHandlingSlice'
import { useAppDispatch } from '@/store'

const validationSchema = Yup.object().shape({
    eventName: Yup.string()
        .min(3, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Event Name Required'),
})

const CreateEventForm = () => {
    const dispatch = useAppDispatch()
    return (
        <div className="mt-6">
            <Formik
                initialValues={{
                    eventName: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {}}
            >
                {({ touched, errors, resetForm }) => (
                    <Form>
                        <FormContainer size="sm">
                            <FormItem
                                label="Event Name"
                                invalid={errors.eventName && touched.eventName}
                                errorMessage={errors.eventName}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="eventName"
                                    placeholder="Event Name"
                                    component={Input}
                                />
                            </FormItem>

                            <FormItem>
                                <div className="flex justify-end">
                                    <Button
                                        onClick={() => {
                                            dispatch(
                                                setCreateEventDialogue(false)
                                            )
                                        }}
                                        className="ltr:mr-2 rtl:ml-2"
                                    >
                                        Close
                                    </Button>
                                    <Button variant="solid" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </FormItem>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CreateEventForm
