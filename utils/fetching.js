import error from "@/app/error"

const getFetch = async(url,header={})=>{
    const res = await fetch(`${process.env.API_URL}${url}`,{
        cache:"no-store",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            ...header
        },
        

    })

    if(res.ok){
        const data = await res.json()
        return data.data
    }else{
        throw new Error(`مشکل در ارسال پیام-  کد : ${res.status}`)
    }
    
}

const postFetch = async (url, body, header = {}) => {
    const res = await fetch(`${process.env.API_URL}${url}`, {
        cache: 'no-store',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...header
        },
        body: JSON.stringify(body)
    });

    return await res.json();
}

export{ getFetch,postFetch }