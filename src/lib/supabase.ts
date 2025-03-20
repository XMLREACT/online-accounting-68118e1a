
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vxxswgkdwwyivigkxhcu.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4eHN3Z2tkd3d5aXZpZ2t4aGN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDg0NzMsImV4cCI6MjAxNTc4NDQ3M30.5TCJt48GyXHjOz1JWyV1m1J0IYAq9u84zlBwCyN7GGw';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
