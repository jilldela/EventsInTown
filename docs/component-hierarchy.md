## Component Hierarchy

**AuthFormContainer**
* AuthFormContainer

**HomeContainer**
* Home
* EventsIndexContainer
* CategoriesContainer

**NavBarContainer**
* NavBar
* Auth

**EventsIndexContainer**
* EventIndexItems
   * Title
   * Description
   * Location
   * Date
   * Time
   * Categories

**EventDetailContainer**
* EventDetailList
  * EventDetailInfo
    * Date
    * Title
    * Organizer
    * TicketPrice
  * Description
  * EventDetails
    * Location
    * Date
    * Time
  * Categories
* CartContainer

**TicketsContainer**
* Tickets

**NewEventFormContainer**
* NewEventForm

**CategoriesContainer**
* CategoryIndex

## Routes

| Path                    | Component  
|-------------------------|------------
| "/sign-up"              | "AuthFormContainer"   
| "/sign-in"              | "AuthFormContainer"     
| "/"                     | "HomeContainer"     
| "/"                     | "NavBarContainer"     
| "/events"               | "EventsIndexContainer"     
| "/events"               | "CategoriesContainer"     
| "/events/new"           | "NewEventFormContainer"     
| "/events/:id"           | "EventDetailContainer"     
| "/events/:id/tickets"   | "TicketsContainer"     
