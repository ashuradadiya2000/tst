export const modules = {
    toolbar: [
        [
            { 'header': '1' }, { 'header': '2' }, { 'font': [] }
        ],
        [
            { size: [] }
        ],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }
        ],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        matchVisual: true,
    },
}

export const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

export const formateCurrency = (price: number) =>{
    return price.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    })
}

export function isValidEmail(email: string):boolean{
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(email)){
        return true
    }
    return false
}