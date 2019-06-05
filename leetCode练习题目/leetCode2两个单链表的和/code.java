package leetCode;

/*
 * @create: 2019-05-29 11:53
 *
 * @description:
 *
 */
public class SumOfTwoList {

    public class ListNode {
        int val;
        ListNode next;

        ListNode(int x) { val = x; }
    }

    public ListNode addTwoLinkedListNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode p = dummy;

        // 表示进位
        int carry = 0;

        // l1, l2不为空，carry不为0
        while (l1 != null || l2 != null || carry != 0) {
            int sum = carry;
            if(l1 != null) {
                sum = sum + l1.val;
                l1 = l1.next;
            }

            if(l2 != null) {
                sum = sum + l2.val;
                l2 = l2.next;
            }


            p.next = new ListNode(sum % 10);
            p = p.next;
            carry = sum / 10;
        }

        return dummy.next;
    }

}
