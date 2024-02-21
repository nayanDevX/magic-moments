export const formatDate = (dateString: any) => {
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }
    const formattedDate = new Date(dateString).toLocaleDateString(
        'en-US',
        options
    )
    return formattedDate
}
