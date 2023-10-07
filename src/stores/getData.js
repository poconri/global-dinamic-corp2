import { createClient } from "@supabase/supabase-js";


export const getData = async (jsonName, ) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

    const { data, error } = await supabase
        .from('Content')
        .select('es , en').eq('name',jsonName)

    if (error) console.log('error', error)
    else return data[0] ?? null
}

export const getPaths = async() => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const {data, error} = await supabase.from('service').select('service_id')

    if(error) {console.log('error',error)
    return null;
}
    else return data ? data.map((service) => ({
        params: {id: `service-${service.service_id}`}
    })) : [];
}

export const getServiceData = async(id) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const {data, error} = await supabase.from('service').select('es , en').eq('service_id',id)

    if(error) {console.log('error',error)
    return null;
    }
    return data ? data[0] : null;
}