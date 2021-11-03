// 124
import { memo } from "react";

// 124
// const Li = memo(({ fullname }) => {
//   console.log(`renderizando ${fullname}`);
//   return <li>{fullname}</li>;
// });

// 126
const Li = memo(({ children }) => {
  console.log(`renderizando ${children}`);
  return <li>{children}</li>;
});

// const MyList = ({ data }) => {
//   console.log("renderizando lista");
//   return (
//     <ul>
//       {data.map((x) => (
//         <Li key={x.name + x.lastname} fullname={`${x.name} ${x.lastname}`} />
//       ))}
//     </ul>
//   );
// };

// 126
const MyList = ({ data }) => {
  console.log("renderizando lista");
  return (
    <ul>
      {data.map((x) => (
        <Li key={x.name + x.lastname}>
          {x.name} {x.lastname}
        </Li>
      ))}
    </ul>
  );
};

export default MyList;
