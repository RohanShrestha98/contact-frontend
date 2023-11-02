export default function Grading() {
  const table = [
    {
      id: "f91e081d-4fbf-463d-86b5-3e77c916c808",
      name: "My Test Course 2",
      units: [
        {
          id: "552278da-64b3-4f1b-b70d-3573b35b0259",
          name: "My Unit 1",
          grades: [
            {
              title: "Platform - 30",
            },
            {
              title: "Homework - 20",
              point: 24,
            },
            {
              title: "Class Participation - 10",
            },
            {
              title: "Unit Evaluation - 30",
            },
            {
              title: "Others - 10",
            },
          ],
        },
        {
          id: "4bee7abe-42d3-4fc3-9425-cc22e843ef90",
          name: "My Unit 2",
          grades: [
            {
              title: "Platform - 30",
            },
            {
              title: "Homework - 20",
            },
            {
              title: "Class Participation - 10",
            },
            {
              title: "Unit Evaluation - 30",
            },
            {
              title: "Others - 10",
            },
          ],
        },
      ],
    },
    {
      id: "f91e081d-4fbf-463d-86b5-3e77c916c808",
      name: "My Test Course",
      units: [
        {
          id: "552278da-64b3-4f1b-b70d-3573b35b0259",
          name: "My Unit 1",
          grades: [
            {
              title: "Platform - 30",
            },
            {
              title: "Homework - 20",
              point: 17,
            },
            {
              title: "Class Participation - 10",
            },
            {
              title: "Unit Evaluation - 30",
            },
            {
              title: "Others - 10",
            },
          ],
        },
        {
          id: "4bee7abe-42d3-4fc3-9425-cc22e843ef90",
          name: "My Unit 2",
          grades: [
            {
              title: "Platform - 30",
            },
            {
              title: "Homework - 20",
            },
            {
              title: "Class Participation - 10",
            },
            {
              title: "Unit Evaluation - 30",
            },
            {
              title: "Rohan ",
              point: 24,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex w-full">
      {table?.slice(0, 1)?.map((item) => {
        return (
          <div key={item?.id} className="">
            <p className="border border-black ">Unit</p>
            {item?.units?.map((item2) => {
              return (
                <div key={item2?.id} className="flex gap-4">
                  <p>{item2?.name}</p>
                  <div className="">
                    {item2?.grades?.map((item3) => {
                      return (
                        <div key={item3?.id} className="flex gap-4">
                          <p className=" text-white border-b-2 border-transparent border-x-2">
                            p
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      {table?.slice(0, 1)?.map((item) => {
        return (
          <div key={item?.id}>
            <p className="border border-black min-w-[200px]">Grades</p>
            {item?.units?.map((item2) => {
              return (
                <div key={item2?.id} className="flex gap-4 ">
                  {/* <p>{item2?.name}</p> */}
                  <div className="">
                    {item2?.grades?.map((item3) => {
                      return (
                        <div
                          key={item3?.id}
                          className="flex gap-4  border-b-2 border-black border-x-2 last:border-red-500 last:border-b-2"
                        >
                          <p className="min-w-[200px] ">{item3?.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      {table?.map((item) => {
        return (
          <div key={item?.id}>
            <p className="border border-black">{item?.name}</p>
            {item?.units?.map((item2) => {
              return (
                <div key={item2?.id} className="flex gap-4 ">
                  <div className="">
                    {item2?.grades?.map((item3) => {
                      return (
                        <div
                          key={item3?.id}
                          className="flex gap-4  border-b-2 border-black border-x-2 last:border-red-500 last:border-b-2"
                        >
                          <p className="min-w-[200px]">{item3?.point ?? 0}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
