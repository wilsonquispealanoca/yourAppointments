import { CgCalendarToday } from 'react-icons/cg';
import AddApointments from '../components/addApointments';
import AppointmentInfo from '../components/appointmentInfo';
import Container from '../components/container';
import Layout from '../components/layout';
import Search from '../components/search';
import { useState, useEffect, useCallback } from 'react';


export default function Home() {

  const [appointmentList, setappointmentList] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("petName");
  const [orderBy, setOrderBy] = useState("asc");

  const filteredAppointments = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a, b) => {
      let order = (orderBy === "asc") ? 1 : -1;
      return (
        a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
      )
  })

  const fetchData = useCallback(() => {
    fetch("./data.json")
    .then(response => response.json())
    .then(data => {
      setappointmentList(data)
    })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      <Layout>
        <Container>
          <div className="mt-4 font-thin break-all">
            <h1 className="text-5xl">
              <CgCalendarToday className="inline-block text-red-600 align-top"/>
              Your apointments
            </h1>
          </div>
          <AddApointments
            onSendAppointment={myAppointment => setappointmentList([...appointmentList, myAppointment])}
            lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
          />
          <Search
            query={query}
            onQueryChange={myQuery => setQuery(myQuery)}
            orderBy={orderBy}
            onOrderByChange={myOrder => setOrderBy(myOrder)}
            sortBy={sortBy}
            onSortByChange={mySort => setSortBy(mySort)}
          />

          <ul>
            {
              filteredAppointments
                .map(appointment => 
                  (
                    <AppointmentInfo 
                      key={appointment.id}
                      appointment={appointment}
                      onDeleteAppointment={appointmentId => 
                        setappointmentList(appointmentList.filter(appointment => 
                          appointment.id !== appointmentId))
                      }
                    />
                  )
                )
            }
          </ul>
        </Container>
      </Layout>
    </>
  )
}
