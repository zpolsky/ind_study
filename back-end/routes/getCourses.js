const route = {
  method: 'GET',
  path: '/getCourses',
  handler: function (request, reply) {
    console.log("getCourses called");
    const fakeCourses = [
      {
        id: '131',
        courseName: 'Introduction to Computer Science',
        sections: [
          {
            sectionName: 'Section 1',
            time: '11:30 - 1:00',
            TAs: ['Alice', 'Bob', 'Clark'],
            missingTAs: ['Bob']
          },
          {
            sectionName: 'Section 2',
            time: '1:00 - 2:30',
            TAs: ['Alice', 'Dan', 'Egbert'],
            missingTAs: []
          },
          {
            sectionName: 'Section 3',
            time: '2:30 - 4:00',
            TAs: ['Felicity', 'Greg', 'Harold'],
            missingTAs: ['Greg', 'Harold']
          },
          {
            sectionName: 'Section 4',
            time: '4:00 - 5:30',
            TAs: ['Isaac', 'Jane', 'Kate'],
            missingTAs: []
          },
          {
            sectionName: 'Office Hours 1',
            time: '6:00 - 8:00',
            TAs: ['Larry', 'Melissa'],
            missingTAs: []
          },
          {
            sectionName: 'Office Hours 2',
            time: '8:00 - 10:00',
            TAs: ['Nate', 'Oran'],
            missingTAs: ['Nate', 'Oran']
          },
          {
            sectionName: 'Office Hours 3',
            time: '6:00 - 8:00',
            TAs: ['Patrick', 'Quentin'],
            missingTAs: ['Quentin']
          },
          {
            sectionName: 'Office Hours 4',
            time: '8:00 - 10:00',
            TAs: ['Rachel', 'Susan'],
            missingTAs: []
          }
        ],
        allTAs: ['Alice', 'Bob', 'Clark', 'Dan', 'Egbert', 'Felicity', 'Greg', 'Harold', 'Isaac', 'Jane', 'Kate', 'Larry', 'Melissa', 'Nate', 'Oran', 'Patrick', 'Quentin', 'Rachel', 'Susan'],
        missingTAs: ['Bob', 'Greg', 'Harold', 'Nate', 'Oran', 'Quentin']
      },
      {
        id: '222S',
        courseName: 'Internet of Things',
        sections: [
          {
            sectionName: 'Section 1',
            time: '2:30 - 4:00',
            TAs: ['Alex', 'Becky', 'Cathy'],
            missingTAs: []
          },
          {
            sectionName: 'Section 2',
            time: '4:00 - 5:30',
            TAs: ['Dorthy', 'Evan', 'Frank'],
            missingTAs: ['Evan', 'Frank']
          },
        ],
        allTAs: ['Alex', 'Becky', 'Cathy', 'Dorthy', 'Evan', 'Frank'],
        missingTAs: ['Evan', 'Frank']
      }
    ];
    reply(fakeCourses);
  }
};

module.exports = route;
