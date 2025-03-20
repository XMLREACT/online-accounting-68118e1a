
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          full_name: string
          birth_date: string | null
          passport_data: string
          ipn: string
          phone: string
          email: string | null
          address: string
          edrpou: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          full_name: string
          birth_date?: string | null
          passport_data: string
          ipn: string
          phone: string
          email?: string | null
          address: string
          edrpou: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          full_name?: string
          birth_date?: string | null
          passport_data?: string
          ipn?: string
          phone?: string
          email?: string | null
          address?: string
          edrpou?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
