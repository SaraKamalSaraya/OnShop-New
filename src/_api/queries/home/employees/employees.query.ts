import { defaultAPI } from "src/_api/axios";
import { API_ENDPOINTS } from "src/utils/constants";

export const getEmployees = async (body: any) => {
  const { data } = await defaultAPI.get(API_ENDPOINTS.EMPLOYEE, body);
  return data;
};

export const GetSingleEmployee = async (body: any) => {
  const { data } = await defaultAPI.get(API_ENDPOINTS.EMPLOYEE, body);
  return data;
};

export const getEmployeesThemes = async (body: any) => {
  const { data } = await defaultAPI.get(API_ENDPOINTS.CATEGORIES_THEMES, body);
  return data;
};

export const CreateEmployeeSlice = async (body: any) => {
  const { data } = await defaultAPI.post(API_ENDPOINTS.EMPLOYEE, body);
  return data;
};

export const UpdateEmployeeSlice = async (body: any) => {
  const { data } = await defaultAPI.put(
    API_ENDPOINTS.EMPLOYEE + `/${body?.employee_id}`,
    body
  );
  return data;
};

export const DeleteEmployee = async (body: any) => {
  const { data } = await defaultAPI.delete(
    API_ENDPOINTS.EMPLOYEE + `/${body?.employee_id}`,
    body
  );
  return data;
};
