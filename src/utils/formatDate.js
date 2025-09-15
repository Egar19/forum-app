export default function formatDate(dateString) {
  const now = new Date();
  const date = new Date(dateString);

  const diffInSeconds = Math.floor((now - date) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);

  if (now.getFullYear() !== date.getFullYear()) {
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  if (diffInSeconds < 60) {
    return 'baru saja';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} day ago`;
  } else if (diffInWeeks < 4) {
    return `${diffInWeeks} week ago`;
  } else {
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
    });
  }
}
