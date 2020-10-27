import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_ALL_FILE_FOLDER = gql`
  {
    files {
      id
      name
      parentFolder
    }
  }
`;

const AllFilesData = () => {
  return (
    <Query query={GET_ALL_FILE_FOLDER}>
      {({ loading, error, data }) => {
        if (loading) return <div> loading....</div>;
        if (data) return <FilesData data={data.files} />;
      }}
    </Query>
  );
};

const FilesData = ({ data }) => {
  return <div>
      {data && data.map((file) => {
          return <div key={file.id}>{file.name}</div>
      })}
  </div>
};

export default AllFilesData;
