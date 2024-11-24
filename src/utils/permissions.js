// src/utils/permissions.js
export const hasPermission = (userPermissions, requiredPermissions) => {
  return requiredPermissions.every((perm) => userPermissions.includes(perm));
};
