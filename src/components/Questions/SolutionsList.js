export const sol_list = [
    {
        name: 'Two Sum',
        solution: 
        `
        public int[] twoSum(int[] nums, int target) {

            Map<Integer, Integer> mp = new HashMap<>();

            for(int i = 0;i < nums.length; i++){
                mp.put(nums[i], i);
            }

            for(int i = 0;i < nums.length; i++){
                int compl = target - nums[i];

                if(mp.containsKey(compl) && mp.get(compl) != i){
                    return new int[] { i, mp.get(compl)};
                }
            }

         return null;

        }
    `
    },
   
    {
        name: 'Best Time to Buy and Sell Stock',
        solution: 
        `
        int maxProfit(vector<int>& prices) {
            int maxprofit = 0, buy = prices[0];
            for(int i = 1;i < prices.size(); i++){
                if(prices[i] < buy){
                    buy = prices[i];
                }else{
                    maxprofit = max(maxprofit, prices[i] - buy);
                }
            }
            return maxprofit;
        }
    `
    },

    {
        name: 'Best Time to Buy and Sell Stock',
        solution: 
        `
      lala la 
      bla bla bla


      void func(1){
        sum = 1 + 1;
      }

      int func(int x){
        cout << x;
      }
    `
    },

    {
        name: 'Contains Duplicate',
        solution: 
        `
      lala la 
      bla bla bla


      void func(1){
        sum = 1 + 1;
      }

      int func(int x){
        cout << x;
      }
    `
    },

    {
        name: 'Product of Array Except Self',
        solution: 
        `
      lala la 
      bla bla bla


      void func(1){
        sum = 1 + 1;
      }

      int func(int x){
        cout << x;
      }
    `
    },

    {
        name: 'Maximum Subarray',
        solution: 
        `
      lala la 
      bla bla bla


      void func(1){
        sum = 1 + 1;
      }

      int func(int x){
        cout << x;
      }
    `
    },

    {
        name: 'Maximum Product Subarray',
        solution: 
        `
      lala la 
      bla bla bla


      void func(1){
        sum = 1 + 1;
      }

      int func(int x){
        cout << x;
      }
    `
    },

    {
        name: 'Find Minimum in Rotated Sorted Array',
        solution: 
        `
      lala la 
      bla bla bla


      void func(1){
        sum = 1 + 1;
      }

      int func(int x){
        cout << x;
      }
    `
    },

    {
        name: 'Search in Rotated Sorted Array',
        solution: 
        `
      lala la 
      bla bla bla


      void func(1){
        sum = 1 + 1;
      }

      int func(int x){
        cout << x;
      }
    `
    },
    {
        name: '3 Sum',
        solution: 
        `
      lala la 
      bla bla bla


      void func(1){
        sum = 1 + 1;
      }

      int func(int x){
        cout << x;
      }
    `
    },

    {
        name: 'Container With Most Water',
        solution: 
        `
      lala la 
      bla bla bla


      void func(1){
        sum = 1 + 1;
      }

      int func(int x){
        cout << x;
      }
    `
    },


]