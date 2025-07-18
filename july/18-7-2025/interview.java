class Solution {
    public List<String> removeSubfolders(String[] folder) {
        Arrays.sort(folder); // Step 1: Sort folders
        List<String> result = new ArrayList<>();
        
        for (String f : folder) {
            // Step 2: Check if current folder is a subfolder of last added one
            if (result.isEmpty() || !f.startsWith(result.get(result.size() - 1) + "/")) {
                result.add(f);
            }
        }
        
        return result;
    }
}
