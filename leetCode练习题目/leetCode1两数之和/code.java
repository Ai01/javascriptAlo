package leetCode;


import java.util.*;

/*
 * @create: 2019-05-28 17:09
 *
 * @description:
 */
public class SumOfTwoNum {
    public int target = 12;

    public int[] nums = {1, 2, 4, 5, 8};

    // 两次循环
    public static int[] fun1(int t, int[] n) {
        int[] res = new int[2];

        for (int i = 0; i < n.length; i++) {
            for (int j = i + 1; j < n.length; j++) {
                if (n[i] + n[j] == t) {
                    res[0] = i;
                    res[1] = j;
                }
            }
        }

        return res;
    }

    // 利用hashMap
    public static int[] fun2(int t, int[] n) {
        Map<Integer, Integer> m = new HashMap<Integer, Integer>();

        int[] res = new int[2];
        for (int i = 0; i < n.length; i++) {
            int _t = t - n[i];

            if (m.get(_t) != null) {
                res[0] = Math.min(m.get(_t), i);
                res[1] = Math.max(m.get(_t), i);
            } else {
                m.put(n[i], i);
            }
        }

        return res;
    }

    public static void main(String[] args) {
        SumOfTwoNum s = new SumOfTwoNum();

        int[] r = SumOfTwoNum.fun1(s.target, s.nums);
        System.out.println(r[0]);
        System.out.println(r[1]);


        int[] r2 = SumOfTwoNum.fun2(s.target, s.nums);
        System.out.println(r2[0]);
        System.out.println(r2[1]);
    }
}
