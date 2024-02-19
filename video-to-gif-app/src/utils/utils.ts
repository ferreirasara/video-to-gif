export const formatDateHour = (date: string): string => {
  const dateObj = new Date(date);
  return dateObj?.toLocaleString('pt-br', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export const formatBytes = (bytes: number) => {
  return `${(bytes / 1048576).toPrecision(4)} Mb`
}