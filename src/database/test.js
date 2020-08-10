const Database = require("./db")
const createProffy = require("./createProffy")

Database.then(async (db) => {
  //Inserir dados

  proffyValue = {
    name: "Victor José",
    avatar: "https://avatars2.githubusercontent.com/u/39142453?s=460&u=0f1e897727e5794e2134ae5b5bca03b8b42396a1&v=4",
    whatsapp: "11953035914",
    bio: "Entusiasta das melhores tecnologias de químicaavançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
  }

  classValue = {
    subject: 1 ,
    cost: "20",
  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }

  ]

  //await createProffy(db, {proffyValue, classValue, classScheduleValues})

  //Consultar dados
  const selectedProffys = await db.all("SELECT * FROM proffys")
 // console.log(selectedProffys)

  // consoltar as classes de um determinado professor
  // e trazer junto os dados do professor

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*, class_schedule.* FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    JOIN class_schedule ON (class_schedule.class_id = classes.proffy_id)
 
  `)

  console.log(selectClassesAndProffys)

  // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
  // o horário do time_from (8h) precisa ser ates ou igual ao horario solicitado
  // o time_to precisa ser acima
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.* 
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday = "1"
    AND class_schedule.time_from <= "4000"
    AND class_schedule.time_to <= "6000"
    
  `)
 // console.log(selectClassesSchedules)



})



