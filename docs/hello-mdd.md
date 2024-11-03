---
title: Hello MDD!
sidebar_position: -9999
---

In this documentation you will find all matters discussed during the meetings of the OC. The OC is a group of students and teachers that tries to meet every 4 weeks to discuss the program and the quality of the education. More information about an OC within the HvA can be found [on the HvA website](https://www.hva.nl/praktisch/algemeen/faculteiten/fmr/opleidingscommissies/opleidingscommissies-fmr.html).

```mermaid
---
title: How to contact the OC
---

flowchart TD;
    Issue["I have a concern or idea for improvement"]
    OcStudentMembers["OC student member"]
    click OcStudentMembers "/docs/2023-2024/members" "See how to contact the current OC members"
    style OcStudentMembers fill:#c2dd64,color:#000
    OcStaffMembers["OC staff member"]
    click OcStaffMembers "/docs/2023-2024/members" "See how to contact the current OC members"
    style OcStaffMembers fill:#c2dd64,color:#000

    Issue --> Confident{It is confidential}
    Confident -->|Yes| OcStudentMembers
    Confident -->|No| OcStaffMembers
    Confident -->|Uncomfortable sharing it with an OC member| OtherStaff["Other staff member"]

    NotHeard["I do not feel heard by the OC"] --> OtherStaff

    OcStudentMembers --> OCMeeting["OC meeting"]
    OcStaffMembers --> OCMeeting
    OtherStaff -- confidentially shares concerns --> OCMeeting

    OCMeeting -- Action --> TeacherMeeting["Discuss with staff members"]
    OCMeeting -- Action --> Workshop["Plan in a workshop"]
    OCMeeting -. Action .-> OtherActions["Other actions..."]
    style OtherActions opacity:0.3,stroke-dasharray:3
    click OCMeeting "/docs/category/2023-2024" "See all OC meetings"
    style OCMeeting fill:#c2dd64,color:#000
```
