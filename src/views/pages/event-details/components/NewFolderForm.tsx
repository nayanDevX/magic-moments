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
import { createFolder } from '@/store/slices/data/createFolder'
import { toastNotification } from '@/utils/helper-components/toastNotification'
import { getUrl } from '@/utils/getUrl'
import { fetchFoldersById } from '@/store/slices/data/fetchFoldersById'

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Add folder required!'),
})

const AddFolderForm = () => {
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
                    dispatch(setAddFolderDialogue(false))
                    dispatch(createFolder({ folder: values, Eid })).then(
                        (res: any) => {
                            toastNotification(
                                res,
                                'Folder Created Successfully',
                                'Folder Creation Failed'
                            )
                            res.payload.statusCode === 200
                                ? dispatch(fetchFoldersById({ Eid: Eid }))
                                : null
                        }
                    )
                }}
            >
                {({ touched, errors, resetForm }) => (
                    <Form>
                        <FormContainer className="" size="sm">
                            <FormItem
                                label="Folder Name"
                                invalid={errors.name && touched.name}
                                errorMessage={errors.name}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="name"
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
