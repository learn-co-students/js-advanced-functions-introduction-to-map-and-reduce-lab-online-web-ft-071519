function mapToNegativize(arr) {
    const negatives = []
    arr.forEach(ele => {
      negatives.push(-Math.abs(ele))
    })
    return negatives;
}