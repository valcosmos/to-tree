export const defaultField = [
  { id: 1, title: '1', pid: 0 },
  { id: 2, title: '2', pid: 1 },
  { id: 3, title: '3', pid: 2 },
  { id: 4, title: '4', pid: 0 },
  { id: 5, title: '5', pid: 4 },
  { id: 6, title: '6', pid: 5 },
  { id: 7, title: '7', pid: 6 },
  { id: 8, title: '8', pid: 7 },
  { id: 9, title: '9', pid: 0 },
  { id: 10, title: '10', pid: 9 },
  { id: 11, title: '11', pid: 10 },
  { id: 12, title: '12', pid: 11 }
]

export const resDefault = [
  {
    id: 1,
    title: '1',
    pid: 0,
    children: [
      {
        id: 2,
        title: '2',
        pid: 1,
        children: [{ id: 3, title: '3', pid: 2, children: [] }]
      }
    ]
  },
  {
    id: 4,
    title: '4',
    pid: 0,
    children: [
      {
        id: 5,
        title: '5',
        pid: 4,
        children: [
          {
            id: 6,
            title: '6',
            pid: 5,
            children: [
              {
                id: 7,
                title: '7',
                pid: 6,
                children: [{ id: 8, title: '8', pid: 7, children: [] }]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: '9',
    pid: 0,
    children: [
      {
        id: 10,
        title: '10',
        pid: 9,
        children: [
          {
            id: 11,
            title: '11',
            pid: 10,
            children: [
              {
                id: 12,
                title: '12',
                pid: 11,
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
]

export const otherField = [
  { _id: 1, title: '1', parentId: 0 },
  { _id: 2, title: '2', parentId: 1 },
  { _id: 3, title: '3', parentId: 2 },
  { _id: 4, title: '4', parentId: 0 },
  { _id: 5, title: '5', parentId: 4 },
  { _id: 6, title: '6', parentId: 5 },
  { _id: 7, title: '7', parentId: 6 },
  { _id: 8, title: '8', parentId: 7 },
  { _id: 9, title: '9', parentId: 0 },
  { _id: 10, title: '10', parentId: 9 },
  { _id: 11, title: '11', parentId: 10 },
  { _id: 12, title: '12', parentId: 11 }
]

export const resOther = [
  {
    _id: 1,
    title: '1',
    parentId: 0,
    children: [
      {
        _id: 2,
        title: '2',
        parentId: 1,
        children: [{ _id: 3, title: '3', parentId: 2, children: [] }]
      }
    ]
  },
  {
    _id: 4,
    title: '4',
    parentId: 0,
    children: [
      {
        _id: 5,
        title: '5',
        parentId: 4,
        children: [
          {
            _id: 6,
            title: '6',
            parentId: 5,
            children: [
              {
                _id: 7,
                title: '7',
                parentId: 6,
                children: [{ _id: 8, title: '8', parentId: 7, children: [] }]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    _id: 9,
    title: '9',
    parentId: 0,
    children: [
      {
        _id: 10,
        title: '10',
        parentId: 9,
        children: [
          {
            _id: 11,
            title: '11',
            parentId: 10,
            children: [
              {
                _id: 12,
                title: '12',
                parentId: 11,
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
]
