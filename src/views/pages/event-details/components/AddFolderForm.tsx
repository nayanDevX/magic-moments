import { useState } from 'react'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import {
    setAddFolderDialogue,
    setJoinEventDialogue,
} from '@/store/slices/data/dialogueHandlingSlice'
import { useAppDispatch } from '@/store'

const validationSchema = Yup.object().shape({
    folderName: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Add folder required!'),
})

const AddFolderForm = () => {
    const dispatch = useAppDispatch()
    return (
        <div className="mt-6">
            <Formik
                initialValues={{
                    folderName: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {}}
            >
                {({ touched, errors, resetForm }) => (
                    <Form>
                        <FormContainer className="" size="sm">
                            <FormItem
                                label="Folder Name"
                                invalid={
                                    errors.folderName && touched.folderName
                                }
                                errorMessage={errors.folderName}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="folderName"
                                    placeholder="Enter folder name "
                                    component={Input}
                                />
                            </FormItem>

                            <FormItem>
                                <div className="flex justify-end">
                                    <Button
                                        onClick={() => {
                                            dispatch(
                                                setAddFolderDialogue(false)
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

export default AddFolderForm
