interface ValidationError {
    type: number;
    schema: {
        format: string;
        type: string;
    };
    path: string;
    message: string;
    summary: string;
}

// const errors: ValidationError[] = [
//     {
//         type: 45,
//         schema: {
//             format: "email",
//             type: "string"
//         },
//         path: "/email",
//         message: "Required property",
//         summary: "Property 'email' is missing"
//     },
//     {
//         type: 54,
//         schema: {
//             format: "email",
//             type: "string"
//         },
//         path: "/email",
//         message: "Expected string",
//         summary: "Expected property 'email' to be string but found: undefined"
//     }
// ];

export default function groupByError<T>(array: T[], key: (item: T) => string): Record<string, T[]> {
    return array.reduce((result, currentItem) => {
        const groupKey = key(currentItem);
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(currentItem);
        return result;
    }, {} as Record<string, T[]>);
}

// const groupedErrors = groupByError(errors, error => error.path);
  
// const simplifiedGroupedErrors = Object.fromEntries(
//   Object.entries(groupedErrors).map(([path, errors]) => [
//       path.split("/")[1],
//       errors.map(({ message, summary }) => ({ Error:message,ErrorDescription:summary }))
//   ])
// );

// console.log(simplifiedGroupedErrors);

// // const groupedErrors = groupBy(errors, error => error.path);

// // console.log(groupedErrors);


//Error Format
     /**Error format 
         * [
         *    "field": [
         *        {
         *          "Error":"Required property",
         *          "ErrorDescription":"Property 'email' is missing"
         *        },
         *        {
         *          "Error":"Expected string",
         *          "ErrorDescription":"Expected  property 'email' to be  string but found: undefined"
         *        }  
         *      ]
         * ]
         */