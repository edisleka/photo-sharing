import { supabase } from '../lib/supabase'

export async function getEvents() {
  const { data } = await supabase.from('events').select('*').throwOnError()
  return data
}
