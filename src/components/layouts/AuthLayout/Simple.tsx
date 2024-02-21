import { cloneElement, useState } from 'react'
import Container from '@/components/shared/Container'
import Card from '@/components/ui/Card'
import type { ReactNode, ReactElement } from 'react'
import type { CommonProps } from '@/@types/common'
import { Upload } from '@/components/ui'
import { FcImageFile } from 'react-icons/fc'
import { uploadData } from 'aws-amplify/storage'
import { Amplify } from 'aws-amplify'
import { getCurrentUser } from 'aws-amplify/auth'
interface SimpleProps extends CommonProps {
    content?: ReactNode
}

const Simple = ({ children, content, ...rest }: SimpleProps) => {
    const handleFileChange = (e: any) => {
        handleUpload(e, e[0].name)
    }
    const handleUpload = async (e: any, name: any) => {
        console.log('File up:', e, name)
        if (e) {
            try {
                const result = await uploadData({
                    key: name,
                    data: e,
                    options: {
                        accessLevel: 'private',
                    },
                }).result
                console.log('Upload succeeded:', result)
            } catch (error) {
                console.error('Upload failed:', error)
            }
        }
    }

    return (
        <div className="h-full">
            <Container className="flex flex-col flex-auto items-center justify-center min-w-0 h-full">
                <Card
                    className="min-w-[320px] md:min-w-[450px] border-1 border-indigo-500  shadow-2xl"
                    bodyClass="md:p-10"
                >
                    <div className="text-center">{content}</div>
                    <div>
                        <Upload
                            onChange={(e: any) => {
                                handleFileChange(e)
                            }}
                            className="w-[30%] m-auto rounded-full "
                            draggable
                        >
                            <div className="my-2 text-center ">
                                <div className="text-3xl mb-1  flex justify-center">
                                    <FcImageFile />
                                </div>
                                <p className="">
                                    <span className="text-gray-500 text-xs dark:text-white">
                                        Upload Profile
                                    </span>
                                </p>
                                {/* <p className="mt-1 opacity-60 dark:text-white">
                                    Support: jpeg, png, gif
                                </p> */}
                            </div>
                        </Upload>
                        {children
                            ? cloneElement(children as ReactElement, {
                                  contentClassName: 'text-center',
                                  ...rest,
                              })
                            : null}
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default Simple
