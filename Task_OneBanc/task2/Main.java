package task2;

public class Main{
    public static int editDistance(String s1,String s2,int Ci,int Cd,int Cs){

        int m=s1.length(),n=s2.length();

        int[][]dp=new int[m+1][n+1];
        for(int i=0;i<=m;i++) dp[i][0]=i*Cd;
        for(int j=0;j<=n;j++) dp[0][j]=j*Ci;
        for(int i=1;i<=m;i++){

            for(int j=1;j<=n;j++){
                if(s1.charAt(i-1)==s2.charAt(j-1))dp[i][j]=dp[i-1][j-1];
                else dp[i][j]=Math.min(Math.min(dp[i][j-1]+Ci,dp[i-1][j]+Cd),dp[i-1][j-1]+Cs);
            }
        }
        return dp[m][n];
    }
    public static void main(String[]args) {
        System.out.println("kitten->sitting(1,2,3):"+editDistance("kitten","sitting",1,2,3));
        System.out.println("flaw->lawn(2,2,1):"+editDistance("flaw","lawn",2,2,1));
        System.out.println("algorithm->logarithm(1,3,2):"+editDistance("algorithm","logarithm",1,3,2));
    }
}