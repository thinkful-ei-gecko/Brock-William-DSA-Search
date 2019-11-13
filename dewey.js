function searchDewey(library, dDIndex, title, start = 0, end = library.length -1) {
  const midIndex = Math.floor((start + end)/2);
  const midDewey = library[midIndex].dewey;
  const midTitle = library[midIndex].title;

  if (start > end) {
    return 'book you searched for does not exist';
  }

  if (midDewey === dDIndex) {
    if(midTitle === title) {
      return data[midIndex];
    }
    else if(title > midTitle) {
      return searchDewey(library, dDIndex, title, midIndex + 1, end);
    }
    else if(title < midTitle) {
      return searchDewey(library, dDIndex, title, start, midIndex - 1);
    }
  } 
  else if (midDewey < dDIndex) {
    return searchDewey(library, dDIndex, title, midIndex + 1, end);
  }
  else if (midDewey > dDIndex) {
    return searchDewey(library, dDIndex, title, start, midIndex - 1);
  }
}

const data = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author: 'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

console.log(searchDewey(data, '005.133', 'The REXX Language'));