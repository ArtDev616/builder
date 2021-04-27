export default function calculateMaterials(length) {
  const heightOfWall = 8;
  const defaultUtrakLength = 9.84; //feet
  const defaultPlasterBoardWidth = 3.93; //feet
  const screwsLengthForUtrack = 2; //every 2 feet
  const screwsLengthForPlasterBoard = 1; // every 1 feet;

  // Materials needs to be output
  let uTracks = 0;
  let cStuds = 0;
  let plasterBoards = 0;
  let screws = 0;
  uTracks = Math.ceil(length / defaultUtrakLength) * 2;
  cStuds = Math.ceil(length / defaultPlasterBoardWidth) + 1;
  plasterBoards = Math.ceil(length / defaultPlasterBoardWidth) * 2;
  // if the rest of Utrack is longer than half of the length, then we can use it again for the ceil.
  if ((uTracks / 2 * defaultUtrakLength - length) > defaultUtrakLength / 2) {
    uTracks--;
  }

  // same for the plasterBoards
  if ((plasterBoards / 2 * defaultPlasterBoardWidth - length) > defaultPlasterBoardWidth / 2) {
    plasterBoards--;
  }

  //screws for uTracks 
  screws = Math.ceil(length / screwsLengthForUtrack) + 1;
  screws = screws * 2; // for ceil and floor

  // screws for cStuds on edges
  screws += (Math.ceil(heightOfWall / screwsLengthForUtrack) + 1) * 2;

  // screws for plasterBoards
  const screwsPerWholePlasterBoard = (Math.ceil(heightOfWall / screwsLengthForPlasterBoard) + 1) * 2 + (Math.ceil(defaultPlasterBoardWidth / screwsLengthForPlasterBoard) - 1) * 2;
  screws += screwsPerWholePlasterBoard * plasterBoards;
  return {
    UTracks: uTracks,
    CStuds: cStuds,
    PlasterBoards: plasterBoards,
    Screws: screws,
  }
}
