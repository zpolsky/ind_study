export default function(username) {
  const fakeCourses = [
    {
      id: 131,
      type: null,
      courseName: 'Introduction to Computer Science',
      sections: [
        {
          number: '1',
          time: '11:30 - 1:00',
          TAs: ['Alice', 'Bob', 'Clark'],
          missingTAs: ['Bob']
        },
        {
          number: '2',
          time: '1:00 - 2:30',
          TAs: ['Alice', 'Dan', 'Egbert'],
          missingTAs: []
        },
        {
          number: '3',
          time: '2:30 - 4:00',
          TAs: ['Felicity', 'Greg', 'Harold'],
          missingTAs: ['Greg', 'Harold']
        },
        {
          number: '4',
          time: '4:00 - 5:30',
          TAs: ['Isaac', 'Jane', 'Kate'],
          missingTAs: []
        },
        {
          number: 'Office Hours 1',
          time: '6:00 - 8:00',
          TAs: ['Larry', 'Melissa'],
          missingTAs: []
        },
        {
          number: 'Office Hours 2',
          time: '8:00 - 10:00',
          TAs: ['Nate', 'Oran'],
          missingTAs: ['Nate', 'Oran']
        },
        {
          number: 'Office Hours 3',
          time: '6:00 - 8:00',
          TAs: ['Patrick', 'Quentin'],
          missingTAs: ['Quentin']
        },
        {
          number: 'Office Hours 4',
          time: '8:00 - 10:00',
          TAs: ['Rachel', 'Susan'],
          missingTAs: []
        }
      ],
      allTAs: ['Alice', 'Bob', 'Clark', 'Dan', 'Egbert', 'Felicity', 'Greg', 'Harold', 'Isaac', 'Jane', 'Kate', 'Larry', 'Melissa', 'Nate', 'Oran', 'Patrick', 'Quentin', 'Rachel', 'Susan'],
      missingTAs: ['Bob', 'Greg', 'Harold', 'Nate', 'Oran', 'Quentin']
    },
    {
      id: 222,
      type: 'S',
      courseName: 'Internet of Things',
      sections: [
        {
          number: '1',
          time: '2:30 - 4:00',
          TAs: ['Alex', 'Becky', 'Cathy'],
          missingTAs: []
        },
        {
          number: '2',
          time: '4:00 - 5:30',
          TAs: ['Dorthy', 'Evan', 'Frank'],
          missingTAs: ['Evan', 'Frank']
        },
      ],
      allTAs: ['Alex', 'Becky', 'Cathy', 'Dorthy', 'Evan', 'Frank'],
      missingTAs: ['Evan', 'Frank']
    }
  ];
  return fakeCourses;
}
