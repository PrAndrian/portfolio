import { projects } from "../mockData";

export function projectRequest(id) {
  return projects.find((p) => p.id === id);
}
