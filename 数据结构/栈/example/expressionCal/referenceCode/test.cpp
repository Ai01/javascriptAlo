#include <iostream>  
#include <string>  
#include <stack>  
using namespace std;  
 
int prior(char c)  
{  
    switch (c)  
    {  
        case '+':  
        case '-':  
            return 1;  
        case '*':  
        case '/':  
            return 2;  
        default:  
            return 0;  
    }  
}  
  
bool isOperator(char c)  
{  
    switch (c)  
    {  
        case '+':  
        case '-':  
        case '*':  
        case '/':  
            return true;  
        default:  
            return false;  
    }  
}  
  
string getPostfix(const string& expr)  
{  
    string output;  // 输出  
    stack<char> s;  // 操作符栈  
    for(int i=0; i<expr.size(); ++i)  
    {  
        char c = expr[i];  
        if(isOperator(c))  
        {  
            while(!s.empty() && isOperator(s.top()) && prior(s.top())>=prior(c))  
            {  
                output.push_back(s.top());  
                s.pop();  
            }  
            s.push(c);  
        }  
        else if(c == '(')  
        {  
            s.push(c);  
        }  
        else if(c == ')')  
        {  
            while(s.top() != '(')  
            {  
                output.push_back(s.top());  
                s.pop();  
            }  
            s.pop();  
        }  
        else  
        {  
            output.push_back(c);  
        }  
    }  
    while (!s.empty())  
    {  
        output.push_back(s.top());  
        s.pop();  
    }  
    return output;  
}  
  
// 从栈中连续弹出两个操作数  
void popTwoNumbers(stack<int>& s, int& first, int& second)  
{  
    first = s.top();  
    s.pop();  
    second = s.top();  
    s.pop();  
}  
  
// 计算后缀表达式的值  
int expCalculate(const string& postfix)  
{  
    int first,second;  
    stack<int> s;  
    for(int i=0; i<postfix.size(); ++i)  
    {  
        char c = postfix[i];  
        switch (c)  
        {  
        case '+':  
            popTwoNumbers(s, first, second);  
            s.push(second+first);  
            cout << first; 
            cout << second; 
            break;  
        case '-':  
            popTwoNumbers(s, first, second);  
            s.push(second-first);  
            cout << first << second; 
            break;  
        case '*':  
            popTwoNumbers(s, first, second);  
            s.push(second*first);  
            cout << first << second; 
            break;  
        case '/':  
            popTwoNumbers(s, first, second);  
            s.push(second/first);  
            cout << first << second; 
            break;  
        default:  
            s.push(c-'0');  
            cout << first << second; 
            break;  
        }  
    }  
    int result = s.top();  
    s.pop();  
    return result;  
}  
  
int main()  
{  
    string expr = "5+2*(6-3)-4/2";  
    string postfix = getPostfix(expr);  
    int result = expCalculate(postfix);  
    cout << "The result is: " << result << endl;  
    return 0;  
}  