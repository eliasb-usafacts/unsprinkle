
export function jpgToSrcSet(jpgPath, ext) {
  return [1, 2, 3].map((density) => jpgPath.replace(".jpg", `@${density}x.${ext} ${density}x`).replace("@1x", "")).join(",\n")
}