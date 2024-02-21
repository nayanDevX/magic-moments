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
import { createEvent } from '@/store/slices/data/createEvent'
import { toastNotification } from '@/utils/helper-components/toastNotification'
import { fetchAllEvents } from '@/store/slices/data/fetchAllEvents'
import { getUrl } from '@/utils/getUrl'

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Event Name Required'),
})

const CreateEventForm = () => {
    const Eid = getUrl(2)
    const dispatch = useAppDispatch()
    return (
        <div className="mt-6">
            <Formik
                initialValues={{
                    name: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    setSubmitting(true)
                    dispatch(setCreateEventDialogue(false))
                    dispatch(createEvent(values)).then((res: any) => {
                        toastNotification(
                            res,
                            'Event Created Successfully',
                            'Event Creation Failed'
                        )
                        dispatch(fetchAllEvents())
                    })
                }}
            >
                {({ touched, errors, resetForm }) => (
                    <Form>
                        <FormContainer size="sm">
                            <FormItem
                                label="Event Name"
                                invalid={errors.name && touched.name}
                                errorMessage={errors.name}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="name"
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
