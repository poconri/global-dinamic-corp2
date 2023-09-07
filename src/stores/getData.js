import { createClient } from "@supabase/supabase-js";


export const getData = async (jsonName) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

    const { data, error } = await supabase
        .from('Content')
        .select('es , en').eq('name',jsonName)

    if (error) console.log('error', error)
    else return data[0] ?? null
}