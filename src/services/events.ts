import { supabase } from '../lib/supabase'
import { TablesInsert } from '../types/database.types'

export async function getEvents() {
  const { data } = await supabase.from('events').select('*').throwOnError()
  return data
}
    
export async function getEventsForUser(userId: string) {
  const { data } = await supabase.from('event_memberships').select('*, events(*)').eq('user_id', userId).throwOnError()
  return data.map((event_membership) => event_membership.events)
}

export async function getEvent(id: string) {
  const { data } = await supabase.from('events').select('*, assets(*)').eq('id', id).throwOnError().single()
  return data
}

export async function createEvent(newEvent: TablesInsert<'events'>, userId: string) {
  const { data } = await supabase.from('events').insert(newEvent).select().single().throwOnError()


  await supabase.from('event_memberships').insert({ event_id: data.id, user_id: userId }).throwOnError()
  
  return data
}

export async function joinEvent(eventId: string, userId: string) {
  const { data } = await supabase.from('event_memberships').insert({ event_id: eventId, user_id: userId }).select().single().throwOnError()
  return data
}
