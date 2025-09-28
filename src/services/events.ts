import { supabase } from '../lib/supabase'

export async function getEvents() {
  const { data } = await supabase.from('events').select('*').throwOnError()
  return data
}

export async function getEvent(id: string) {
  const { data } = await supabase.from('events').select('*, assets(*)').eq('id', id).throwOnError().single()
  return data
}
