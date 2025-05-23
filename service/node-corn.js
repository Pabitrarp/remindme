const cornjobs=require("node-cron");
const sendmail=require("./sendmail");
const moment=require("moment")
const remindermodel=require("../models/remindme")

const startcornjobs=()=>{

    cornjobs.schedule("* * * * *",async()=>{
        console.log("running a task every minute")
     const now = moment();
  const targetTime = moment().add(5, "minutes");

    try {
        const reminders = await remindermodel.find({
      date: { $gte: now.toDate(), $lte: targetTime.toDate() },
    });

    reminders.forEach(async (reminder) => {
      if (reminder.method === "email") {
        await sendmail(reminder.email,reminder.text);
        console.log(`✅ Email sent to ${reminder.email}`);
      } else if (reminder.method === "sms") {
        console.log("no free sms service avialable");
        console.log(`📱 SMS to ${reminder.mobilenumber}: ${reminder.text}`);
      }
    });
    } catch (error) {
        console.log(error.message);
    }
})
}



module.exports=startcornjobs;