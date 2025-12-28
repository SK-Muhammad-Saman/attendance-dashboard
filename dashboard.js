import { createClient } from '@supabase/supabase-js'

// replace with your Supabase URL & anon key
const supabaseUrl = 'https://cawrvnutflgvbrisuqtd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhd3J2bnV0ZmxndmJyaXN1cXRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwNDcwODgsImV4cCI6MjA4MTYyMzA4OH0.ZLSVVcZUl2muc584TL_UIYxykjrf_F_dOtDJp53A3cU'
const supabase = createClient(supabaseUrl, supabaseKey)

async function fetchAttendance() {
  // fetch students for class "Ibnu Majah"
  let { data, error } = await supabase
    .from('students')
    .select(`
      id, name, standard, barcode, photo_url,
      student_attendance!inner(status, timestamp, date)
    `)
    .eq('class_label', 'Ibnu Majah')
    .eq('student_attendance.date', '2025-12-20') // today

  if(error) console.log(error)
  else console.log(data)
}

fetchAttendance()
