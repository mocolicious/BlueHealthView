/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateAccountInput = {
  id?: string | null;
  name: string;
};

export type ModelAccountConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelAccountConditionInput | null> | null;
  or?: Array<ModelAccountConditionInput | null> | null;
  not?: ModelAccountConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateAccountInput = {
  id: string;
  name?: string | null;
};

export type DeleteAccountInput = {
  id?: string | null;
};

export type CreatePatientInput = {
  id?: string | null;
  title: string;
  accountID: string;
};

export type ModelPatientConditionInput = {
  title?: ModelStringInput | null;
  accountID?: ModelIDInput | null;
  and?: Array<ModelPatientConditionInput | null> | null;
  or?: Array<ModelPatientConditionInput | null> | null;
  not?: ModelPatientConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdatePatientInput = {
  id: string;
  title?: string | null;
  accountID?: string | null;
};

export type DeletePatientInput = {
  id?: string | null;
};

export type CreateAppointmentInput = {
  id?: string | null;
  patientID: string;
  notes: string;
};

export type ModelAppointmentConditionInput = {
  patientID?: ModelIDInput | null;
  notes?: ModelStringInput | null;
  and?: Array<ModelAppointmentConditionInput | null> | null;
  or?: Array<ModelAppointmentConditionInput | null> | null;
  not?: ModelAppointmentConditionInput | null;
};

export type UpdateAppointmentInput = {
  id: string;
  patientID?: string | null;
  notes?: string | null;
};

export type DeleteAppointmentInput = {
  id?: string | null;
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelAccountFilterInput | null> | null;
  or?: Array<ModelAccountFilterInput | null> | null;
  not?: ModelAccountFilterInput | null;
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  accountID?: ModelIDInput | null;
  and?: Array<ModelPatientFilterInput | null> | null;
  or?: Array<ModelPatientFilterInput | null> | null;
  not?: ModelPatientFilterInput | null;
};

export type ModelAppointmentFilterInput = {
  id?: ModelIDInput | null;
  patientID?: ModelIDInput | null;
  notes?: ModelStringInput | null;
  and?: Array<ModelAppointmentFilterInput | null> | null;
  or?: Array<ModelAppointmentFilterInput | null> | null;
  not?: ModelAppointmentFilterInput | null;
};

export type CreateAccountMutation = {
  __typename: "Account";
  id: string;
  name: string;
  patients: {
    __typename: "ModelPatientConnection";
    items: Array<{
      __typename: "Patient";
      id: string;
      title: string;
      accountID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateAccountMutation = {
  __typename: "Account";
  id: string;
  name: string;
  patients: {
    __typename: "ModelPatientConnection";
    items: Array<{
      __typename: "Patient";
      id: string;
      title: string;
      accountID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteAccountMutation = {
  __typename: "Account";
  id: string;
  name: string;
  patients: {
    __typename: "ModelPatientConnection";
    items: Array<{
      __typename: "Patient";
      id: string;
      title: string;
      accountID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreatePatientMutation = {
  __typename: "Patient";
  id: string;
  title: string;
  accountID: string;
  account: {
    __typename: "Account";
    id: string;
    name: string;
    patients: {
      __typename: "ModelPatientConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelAppointmentConnection";
    items: Array<{
      __typename: "Appointment";
      id: string;
      patientID: string;
      notes: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdatePatientMutation = {
  __typename: "Patient";
  id: string;
  title: string;
  accountID: string;
  account: {
    __typename: "Account";
    id: string;
    name: string;
    patients: {
      __typename: "ModelPatientConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelAppointmentConnection";
    items: Array<{
      __typename: "Appointment";
      id: string;
      patientID: string;
      notes: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeletePatientMutation = {
  __typename: "Patient";
  id: string;
  title: string;
  accountID: string;
  account: {
    __typename: "Account";
    id: string;
    name: string;
    patients: {
      __typename: "ModelPatientConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelAppointmentConnection";
    items: Array<{
      __typename: "Appointment";
      id: string;
      patientID: string;
      notes: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateAppointmentMutation = {
  __typename: "Appointment";
  id: string;
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    title: string;
    accountID: string;
    account: {
      __typename: "Account";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelAppointmentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  notes: string;
};

export type UpdateAppointmentMutation = {
  __typename: "Appointment";
  id: string;
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    title: string;
    accountID: string;
    account: {
      __typename: "Account";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelAppointmentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  notes: string;
};

export type DeleteAppointmentMutation = {
  __typename: "Appointment";
  id: string;
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    title: string;
    accountID: string;
    account: {
      __typename: "Account";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelAppointmentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  notes: string;
};

export type GetAccountQuery = {
  __typename: "Account";
  id: string;
  name: string;
  patients: {
    __typename: "ModelPatientConnection";
    items: Array<{
      __typename: "Patient";
      id: string;
      title: string;
      accountID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListAccountsQuery = {
  __typename: "ModelAccountConnection";
  items: Array<{
    __typename: "Account";
    id: string;
    name: string;
    patients: {
      __typename: "ModelPatientConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPatientQuery = {
  __typename: "Patient";
  id: string;
  title: string;
  accountID: string;
  account: {
    __typename: "Account";
    id: string;
    name: string;
    patients: {
      __typename: "ModelPatientConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelAppointmentConnection";
    items: Array<{
      __typename: "Appointment";
      id: string;
      patientID: string;
      notes: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListPatientsQuery = {
  __typename: "ModelPatientConnection";
  items: Array<{
    __typename: "Patient";
    id: string;
    title: string;
    accountID: string;
    account: {
      __typename: "Account";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelAppointmentConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetAppointmentQuery = {
  __typename: "Appointment";
  id: string;
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    title: string;
    accountID: string;
    account: {
      __typename: "Account";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelAppointmentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  notes: string;
};

export type ListAppointmentsQuery = {
  __typename: "ModelAppointmentConnection";
  items: Array<{
    __typename: "Appointment";
    id: string;
    patientID: string;
    patient: {
      __typename: "Patient";
      id: string;
      title: string;
      accountID: string;
    } | null;
    notes: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateAccountSubscription = {
  __typename: "Account";
  id: string;
  name: string;
  patients: {
    __typename: "ModelPatientConnection";
    items: Array<{
      __typename: "Patient";
      id: string;
      title: string;
      accountID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateAccountSubscription = {
  __typename: "Account";
  id: string;
  name: string;
  patients: {
    __typename: "ModelPatientConnection";
    items: Array<{
      __typename: "Patient";
      id: string;
      title: string;
      accountID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteAccountSubscription = {
  __typename: "Account";
  id: string;
  name: string;
  patients: {
    __typename: "ModelPatientConnection";
    items: Array<{
      __typename: "Patient";
      id: string;
      title: string;
      accountID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreatePatientSubscription = {
  __typename: "Patient";
  id: string;
  title: string;
  accountID: string;
  account: {
    __typename: "Account";
    id: string;
    name: string;
    patients: {
      __typename: "ModelPatientConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelAppointmentConnection";
    items: Array<{
      __typename: "Appointment";
      id: string;
      patientID: string;
      notes: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdatePatientSubscription = {
  __typename: "Patient";
  id: string;
  title: string;
  accountID: string;
  account: {
    __typename: "Account";
    id: string;
    name: string;
    patients: {
      __typename: "ModelPatientConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelAppointmentConnection";
    items: Array<{
      __typename: "Appointment";
      id: string;
      patientID: string;
      notes: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeletePatientSubscription = {
  __typename: "Patient";
  id: string;
  title: string;
  accountID: string;
  account: {
    __typename: "Account";
    id: string;
    name: string;
    patients: {
      __typename: "ModelPatientConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelAppointmentConnection";
    items: Array<{
      __typename: "Appointment";
      id: string;
      patientID: string;
      notes: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateAppointmentSubscription = {
  __typename: "Appointment";
  id: string;
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    title: string;
    accountID: string;
    account: {
      __typename: "Account";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelAppointmentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  notes: string;
};

export type OnUpdateAppointmentSubscription = {
  __typename: "Appointment";
  id: string;
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    title: string;
    accountID: string;
    account: {
      __typename: "Account";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelAppointmentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  notes: string;
};

export type OnDeleteAppointmentSubscription = {
  __typename: "Appointment";
  id: string;
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    title: string;
    accountID: string;
    account: {
      __typename: "Account";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelAppointmentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  notes: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAccount(
    input: CreateAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<CreateAccountMutation> {
    const statement = `mutation CreateAccount($input: CreateAccountInput!, $condition: ModelAccountConditionInput) {
        createAccount(input: $input, condition: $condition) {
          __typename
          id
          name
          patients {
            __typename
            items {
              __typename
              id
              title
              accountID
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAccountMutation>response.data.createAccount;
  }
  async UpdateAccount(
    input: UpdateAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<UpdateAccountMutation> {
    const statement = `mutation UpdateAccount($input: UpdateAccountInput!, $condition: ModelAccountConditionInput) {
        updateAccount(input: $input, condition: $condition) {
          __typename
          id
          name
          patients {
            __typename
            items {
              __typename
              id
              title
              accountID
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAccountMutation>response.data.updateAccount;
  }
  async DeleteAccount(
    input: DeleteAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<DeleteAccountMutation> {
    const statement = `mutation DeleteAccount($input: DeleteAccountInput!, $condition: ModelAccountConditionInput) {
        deleteAccount(input: $input, condition: $condition) {
          __typename
          id
          name
          patients {
            __typename
            items {
              __typename
              id
              title
              accountID
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAccountMutation>response.data.deleteAccount;
  }
  async CreatePatient(
    input: CreatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<CreatePatientMutation> {
    const statement = `mutation CreatePatient($input: CreatePatientInput!, $condition: ModelPatientConditionInput) {
        createPatient(input: $input, condition: $condition) {
          __typename
          id
          title
          accountID
          account {
            __typename
            id
            name
            patients {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              patientID
              notes
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePatientMutation>response.data.createPatient;
  }
  async UpdatePatient(
    input: UpdatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<UpdatePatientMutation> {
    const statement = `mutation UpdatePatient($input: UpdatePatientInput!, $condition: ModelPatientConditionInput) {
        updatePatient(input: $input, condition: $condition) {
          __typename
          id
          title
          accountID
          account {
            __typename
            id
            name
            patients {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              patientID
              notes
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePatientMutation>response.data.updatePatient;
  }
  async DeletePatient(
    input: DeletePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<DeletePatientMutation> {
    const statement = `mutation DeletePatient($input: DeletePatientInput!, $condition: ModelPatientConditionInput) {
        deletePatient(input: $input, condition: $condition) {
          __typename
          id
          title
          accountID
          account {
            __typename
            id
            name
            patients {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              patientID
              notes
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePatientMutation>response.data.deletePatient;
  }
  async CreateAppointment(
    input: CreateAppointmentInput,
    condition?: ModelAppointmentConditionInput
  ): Promise<CreateAppointmentMutation> {
    const statement = `mutation CreateAppointment($input: CreateAppointmentInput!, $condition: ModelAppointmentConditionInput) {
        createAppointment(input: $input, condition: $condition) {
          __typename
          id
          patientID
          patient {
            __typename
            id
            title
            accountID
            account {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          notes
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAppointmentMutation>response.data.createAppointment;
  }
  async UpdateAppointment(
    input: UpdateAppointmentInput,
    condition?: ModelAppointmentConditionInput
  ): Promise<UpdateAppointmentMutation> {
    const statement = `mutation UpdateAppointment($input: UpdateAppointmentInput!, $condition: ModelAppointmentConditionInput) {
        updateAppointment(input: $input, condition: $condition) {
          __typename
          id
          patientID
          patient {
            __typename
            id
            title
            accountID
            account {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          notes
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAppointmentMutation>response.data.updateAppointment;
  }
  async DeleteAppointment(
    input: DeleteAppointmentInput,
    condition?: ModelAppointmentConditionInput
  ): Promise<DeleteAppointmentMutation> {
    const statement = `mutation DeleteAppointment($input: DeleteAppointmentInput!, $condition: ModelAppointmentConditionInput) {
        deleteAppointment(input: $input, condition: $condition) {
          __typename
          id
          patientID
          patient {
            __typename
            id
            title
            accountID
            account {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          notes
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAppointmentMutation>response.data.deleteAppointment;
  }
  async GetAccount(id: string): Promise<GetAccountQuery> {
    const statement = `query GetAccount($id: ID!) {
        getAccount(id: $id) {
          __typename
          id
          name
          patients {
            __typename
            items {
              __typename
              id
              title
              accountID
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAccountQuery>response.data.getAccount;
  }
  async ListAccounts(
    filter?: ModelAccountFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAccountsQuery> {
    const statement = `query ListAccounts($filter: ModelAccountFilterInput, $limit: Int, $nextToken: String) {
        listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            patients {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAccountsQuery>response.data.listAccounts;
  }
  async GetPatient(id: string): Promise<GetPatientQuery> {
    const statement = `query GetPatient($id: ID!) {
        getPatient(id: $id) {
          __typename
          id
          title
          accountID
          account {
            __typename
            id
            name
            patients {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              patientID
              notes
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPatientQuery>response.data.getPatient;
  }
  async ListPatients(
    filter?: ModelPatientFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPatientsQuery> {
    const statement = `query ListPatients($filter: ModelPatientFilterInput, $limit: Int, $nextToken: String) {
        listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            accountID
            account {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPatientsQuery>response.data.listPatients;
  }
  async GetAppointment(id: string): Promise<GetAppointmentQuery> {
    const statement = `query GetAppointment($id: ID!) {
        getAppointment(id: $id) {
          __typename
          id
          patientID
          patient {
            __typename
            id
            title
            accountID
            account {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          notes
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAppointmentQuery>response.data.getAppointment;
  }
  async ListAppointments(
    filter?: ModelAppointmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAppointmentsQuery> {
    const statement = `query ListAppointments($filter: ModelAppointmentFilterInput, $limit: Int, $nextToken: String) {
        listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            patientID
            patient {
              __typename
              id
              title
              accountID
            }
            notes
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAppointmentsQuery>response.data.listAppointments;
  }
  OnCreateAccountListener: Observable<
    OnCreateAccountSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAccount {
        onCreateAccount {
          __typename
          id
          name
          patients {
            __typename
            items {
              __typename
              id
              title
              accountID
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateAccountSubscription>;

  OnUpdateAccountListener: Observable<
    OnUpdateAccountSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAccount {
        onUpdateAccount {
          __typename
          id
          name
          patients {
            __typename
            items {
              __typename
              id
              title
              accountID
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateAccountSubscription>;

  OnDeleteAccountListener: Observable<
    OnDeleteAccountSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAccount {
        onDeleteAccount {
          __typename
          id
          name
          patients {
            __typename
            items {
              __typename
              id
              title
              accountID
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteAccountSubscription>;

  OnCreatePatientListener: Observable<
    OnCreatePatientSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePatient {
        onCreatePatient {
          __typename
          id
          title
          accountID
          account {
            __typename
            id
            name
            patients {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              patientID
              notes
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreatePatientSubscription>;

  OnUpdatePatientListener: Observable<
    OnUpdatePatientSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePatient {
        onUpdatePatient {
          __typename
          id
          title
          accountID
          account {
            __typename
            id
            name
            patients {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              patientID
              notes
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdatePatientSubscription>;

  OnDeletePatientListener: Observable<
    OnDeletePatientSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePatient {
        onDeletePatient {
          __typename
          id
          title
          accountID
          account {
            __typename
            id
            name
            patients {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              patientID
              notes
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeletePatientSubscription>;

  OnCreateAppointmentListener: Observable<
    OnCreateAppointmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAppointment {
        onCreateAppointment {
          __typename
          id
          patientID
          patient {
            __typename
            id
            title
            accountID
            account {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          notes
        }
      }`
    )
  ) as Observable<OnCreateAppointmentSubscription>;

  OnUpdateAppointmentListener: Observable<
    OnUpdateAppointmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAppointment {
        onUpdateAppointment {
          __typename
          id
          patientID
          patient {
            __typename
            id
            title
            accountID
            account {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          notes
        }
      }`
    )
  ) as Observable<OnUpdateAppointmentSubscription>;

  OnDeleteAppointmentListener: Observable<
    OnDeleteAppointmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAppointment {
        onDeleteAppointment {
          __typename
          id
          patientID
          patient {
            __typename
            id
            title
            accountID
            account {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          notes
        }
      }`
    )
  ) as Observable<OnDeleteAppointmentSubscription>;
}
