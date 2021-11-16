import { CgCalendarToday } from 'react-icons/cg';
import { useState } from 'react';


function AddApointments({onSendAppointment, lastId}) {

  const clearData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: ""
  }

  const [toogleForm, settoogleForm] = useState(false);
  const [formData, setFormData] = useState(clearData);

  function formDataPublish(){
    const appointmentInfo = {
      id: lastId + 1,
      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate + "" + formData.aptTime,
      aptNotes: formData.aptNotes
    }

    onSendAppointment(appointmentInfo);
    setFormData(clearData);
    settoogleForm(!toogleForm)
  }

  return (
    <div>
      <button 
        onClick={() => {settoogleForm(!toogleForm)}}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md mt-4 ${toogleForm ? "rounded-t-md" : "rounded-md"}`}>
        <div><CgCalendarToday className="inline-block align-text-top text-2xl" />  Add Appointment</div>
      </button>
      {
        toogleForm &&
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5 mt-3">
          <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Owner Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input 
              onChange={(event) => {setFormData ({...formData, ownerName: event.target.value})}}
              value={formData.ownerName}
              type="text" name="ownerName" id="ownerName"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5 mt-3">
          <label htmlFor="petName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Pet Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input 
              onChange={(event) => {setFormData ({...formData, petName: event.target.value})}}
              value={formData.petName}
              type="text" name="petName" id="petName"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5 mt-3">
          <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Apt Date
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input 
              onChange={(event) => {setFormData ({...formData, aptDate: event.target.value})}}
              value={formData.aptDate}
              type="date" name="aptDate" id="aptDate"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5 mt-3">
          <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Apt Time
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input 
              onChange={(event) => {setFormData ({...formData, aptTime: event.target.value})}}
              value={formData.aptTime}
              type="time" name="aptTime" id="aptTime"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5 mt-3">
          <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Appointment Notes
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea 
              onChange={(event) => {setFormData ({...formData, aptNotes: event.target.value})}}
              value={formData.aptNotes}
              id="aptNotes" name="aptNotes" rows="3"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Detailed comments about the condition"></textarea>
          </div>
        </div>


        <div className="pt-5">
          <div className="flex justify-end">
            <button 
              onClick={formDataPublish}
              type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
              Submit
            </button>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default AddApointments;