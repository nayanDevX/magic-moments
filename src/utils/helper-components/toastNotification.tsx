import { toast, Notification } from '@/components/ui'

export const toastNotification = (
    res: any,
    namePositive: string,
    nameNegative: string
) => {
    if (res.meta.requestStatus === 'fulfilled') {
        if (res.payload.statusCode === 200) {
            toast.push(
                <Notification
                    title={`${namePositive}`}
                    type="success"
                    duration={1000}
                />,
                {
                    placement: 'top-center',
                }
            )
        } else {
            toast.push(
                <Notification
                    title={`${nameNegative}`}
                    type="danger"
                    duration={1000}
                />,
                {
                    placement: 'top-center',
                }
            )
        }
    } else {
        toast.push(
            <Notification
                title={res.error.message.replace(/"/g, '')}
                type="danger"
                duration={1000}
            />,
            {
                placement: 'top-center',
            }
        )
    }
}
