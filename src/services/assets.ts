import { supabase } from "@/lib/supabase"
import { TablesInsert } from "@/types/database.types"

export const insertAsset = async (newAsset: TablesInsert<'assets'>) => {
  const { data } = await supabase.from('assets').insert(newAsset).select().single().throwOnError()
  return data
}
