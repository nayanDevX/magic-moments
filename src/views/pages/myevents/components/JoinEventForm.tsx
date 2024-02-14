import { useState } from 'react'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { setJoinEventDialogue } from '@/store/slices/data/dialogueHandlingSlice'
import { useAppDispatch } from '@/store'

const validationSchema = Yup.object().shape({
    eventId: Yup.string()
        .min(3, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Event Name Required'),
})

const JoinEventForm = () => {
    const dispatch = useAppDispatch()
    return (
        <div className="mt-6">
            <Formik
                initialValues={{
                    eventId: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {}}
            >
                {({ touched, errors, resetForm }) => (
                    <Form>
                        <FormContainer size="sm">
                            <FormItem
                                label="Event ID"
                                invalid={errors.eventId && touched.eventId}
                                errorMessage={errors.eventId}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="eventId"
                                    placeholder="Event ID"
                                    component={Input}
                                />
                            </FormItem>

                            <FormItem>
                                <div className="flex justify-end">
                                    <Button
                                        onClick={() => {
                                            dispatch(
                                                setJoinEventDialogue(false)
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

export default JoinEventForm
